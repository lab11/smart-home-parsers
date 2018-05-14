from pifx import *

class LIFXCloudLight:
    def __init__(self, name, api_key):
        self.cloud = PIFX(api_key=api_key)
        self.name = name
        if name == 'the lights':
            self.selector = 'all'
        else:
            self.selector = 'label:' + name
        self.duration_sec = 0.5

        self.power = BinaryAttribute(["power"], ["on", "off"])
        self.hue = ToroidAttribute(["hue", "color"], 0, 360, 20)
        self.saturation = GradientAttribute(["saturation"], 0, 1.0, 0.1)
        self.brightness = GradientAttribute(["brightness"], 0, 1.0, 0.1)
        self.temperature = GradientAttribute(["temperature", "color temperature"], 2500, 9000, 250)
        self.attributes = [self.power, self.hue, self.saturation, self.brightness, self.temperature]

        self.values = {
            "on": {"attribute": self.power, "val": "on"},
            "off": {"attribute": self.power, "val": "off"},
            "red": {"attribute": self.hue, "val": 0},
            "orange": {"attribute": self.hue, "val": 35},
            "yellow": {"attribute": self.hue, "val": 45},
            "green": {"attribute": self.hue, "val": 120},
            "turquoise": {"attribute": self.hue, "val": 150},
            "aqua": {"attribute": self.hue, "val": 165},
            "cyan": {"attribute": self.hue, "val": 180},
            "sky blue": {"attribute": self.hue, "val": 200},
            "blue": {"attribute": self.hue, "val": 240},
            "purple": {"attribute": self.hue, "val": 270},
            "pink": {"attribute": self.hue, "val": 290},
            "hot pink": {"attribute": self.hue, "val": 300},
            "vibrant": {"attribute": self.saturation, "val": 1.0},
            "saturated": {"attribute": self.saturation, "val": 1.0},
            "pastel": {"attribute": self.saturation, "val": 0.5},
            "pale": {"attribute": self.saturation, "val": 0.15},
            "white": {"attribute": self.saturation, "val": 0},
            "bright": {"attribute": self.brightness, "val": 1.0},
            "dim": {"attribute": self.brightness, "val": 0.2},
            "dark": {"attribute": self.brightness, "val": 0.01},
            "warm": {"attribute": self.temperature, "val": 2500},
            "neutral": {"attribute": self.temperature, "val": 4500},
            "cool": {"attribute": self.temperature, "val": 9000}
        }

    ### STANDARD INTERFACE START ###
    def set_val(self, val_label):
        attribute, val = self.resolve_val_label(val_label)
        return self.set_LIFX_val(attribute.labels, val)

    def step_val(self, reference_val_label, direction):
        attribute, reference_val = self.resolve_val_label(reference_val_label)
        current_val = self.get_LIFX_val(attribute.labels)
        stepped_val = attribute.get_stepped_val(current_val, reference_val, direction)
        print(current_val, reference_val, stepped_val)
        return self.set_LIFX_val(attribute.labels, stepped_val)

    def is_val(self, val_label):
        attribute, val = self.resolve_val_label(val_label)
        actual_val = self.get_LIFX_val(attribute.labels)
        return val == actual_val

    def get_val(self, attribute_label):
        val = self.get_LIFX_val([attribute_label])
        readable_val = None
        for value in self.values:
            if attribute_label in self.values[value]["attribute"].labels and self.values[value]["val"] == val:
                readable_val = value
        if readable_val == None:
            readable_val = "The {} is {}".format(attribute_label, val)
        return readable_val

    def dim(self):
        return self.step_val("dark", "towards")

    def is_dimmable(self):
        return True

    def is_steppable(self):
        return len(self.get_steppable_attribute_labels()) > 0

    def is_settable(self):
        return len(self.get_settable_attribute_labels()) > 0

    def get_settable_attribute_labels(self):
        settable_attribute_labels = []
        for attribute in self.attributes:
            if attribute.is_settable:
                settable_attribute_labels.append(attribute.labels)
        return settable_attribute_labels

    def get_settable_val_labels(self):
        settable_val_labels = []
        for val in self.values:
            if self.values[val]["attribute"].is_settable:
                settable_val_labels.append(val)
        return settable_val_labels

    def get_steppable_attribute_labels(self):
        steppable_attribute_labels = []
        for attribute in self.attributes:
            if attribute.is_steppable:
                steppable_attribute_labels.append(attribute.labels)
        return steppable_attribute_labels

    def get_steppable_val_labels(self):
        steppable_val_labels = []
        for val in self.values:
            if self.values[val]["attribute"].is_steppable:
                steppable_val_labels.append(val)
        return steppable_val_labels
    ### STANDARD INTERFACE END ###
    ### ADDITIONAL INTERFACE START ###

    def flash(self, hue=0, sat=0, cycles=3):
        if hue in self.values:
            hue = self.values[hue]["val"]
        if sat in self.values:
            sat = self.values[sat]["val"]
        self.cloud.pulse_lights(color="hue:{} saturation:{} brightness:1".format(hue, sat), selector=self.selector, period=0.5, cycles=cycles)
        return True

    def strobe(self, hue=0, sat=0, cycles=8):
        if hue in self.values:
            hue = self.values[hue]["val"]
        if sat in self.values:
            sat = self.values[sat]["val"]
        self.cloud.pulse_lights(color="hue:{} saturation:{} brightness:1".format(hue, sat), selector=self.selector, period=0.1, cycles=cycles)
        return True

    def breathe(self, period=6, cycles=3):
        self.cloud.breathe_lights(color="brightness:0.2", selector=self.selector, period=period, cycles=cycles)
        return True

    def notify(self):
        self.breathe(period=0.75)
        return True

    ### ADDITIONAL INTERFACE END ###

    def set_LIFX_val(self, attribute_labels, val):
        data = self.cloud.list_lights(selector=self.selector)[0]
        if data['connected'] == True:
            if attribute_labels != None and val != None:
                if "power" in attribute_labels:
                    self.cloud.set_state(selector=self.selector, power=val, duration=self.duration_sec)
                elif "hue" in attribute_labels:
                    self.cloud.set_state(selector=self.selector, color="hue:"+str(val), duration=self.duration_sec)
                elif "saturation" in attribute_labels:
                    self.cloud.set_state(selector=self.selector, color="saturation:"+str(val), duration=self.duration_sec)
                elif "brightness" in attribute_labels:
                    self.cloud.set_state(selector=self.selector, color="brightness:"+str(val), duration=self.duration_sec)
                elif "temperature" in attribute_labels:
                    self.cloud.set_state(selector=self.selector, color="kelvin:"+str(val), duration=self.duration_sec)
                return True
            else:
                return False
        else:
            return False

    def get_LIFX_val(self, attribute_labels):
        retval = None
        data = self.cloud.list_lights(selector=self.selector)[0]
        if attribute_labels != None:
            if "power" in attribute_labels:
                retval = data["power"]
            elif "hue" in attribute_labels:
                retval = data["color"]["hue"]
            elif "saturation" in attribute_labels:
                retval = data["color"]["saturation"]
            elif "brightness" in attribute_labels:
                retval = data["brightness"]
            elif "temperature" in attribute_labels:
                retval = data["color"]["kelvin"]
        return retval

    # returns LIFX attribute and val
    def resolve_val_label(self, val_label):
        try:
            attribute= self.values[val_label]["attribute"]
            LIFX_val = self.values[val_label]["val"]
        except:
            attribute, LIFX_val = None
        return attribute, LIFX_val

class BinaryAttribute:
    def __init__(self, labels, values):
        self.labels = labels
        self.values = values
        self.is_settable = True
        self.is_steppable = False

class ToroidAttribute:
    def __init__(self, labels, start_val, end_val, step_size):
        self.labels = labels
        self.start_val = start_val
        self.end_val = end_val
        self.step_size = step_size
        self.is_settable = True
        self.is_steppable = True

    def get_stepped_val(self, current_val, reference_val, direction):
        stepped_val = None
        stepped_candidates = [current_val,
                            ((current_val + self.step_size) % self.end_val) + self.start_val,
                            ((current_val - self.step_size) % self.end_val) + self.start_val]
        distance_candidates = []
        for candidate in stepped_candidates:
            dist = abs(reference_val - candidate)
            reverse_dist = (self.end_val - self.start_val) - dist
            distance_candidates.append([dist, reverse_dist])
        if direction == "towards":
            min_dists = [min(dists) for dists in distance_candidates]
            min_dist = min(min_dists)
            for (i, stepped_candidate) in enumerate(stepped_candidates):
                if min_dists[i] == min_dist:
                    stepped_val = stepped_candidate
            if stepped_val == current_val:
                stepped_val = reference_val
        elif direction == "away":
            min_dists = [min(dists) for dists in distance_candidates]
            max_dist = max(min_dists)
            for (i, stepped_candidate) in enumerate(stepped_candidates):
                if min_dists[i] == max_dist:
                    stepped_val = stepped_candidate
            if stepped_val == current_val:
                stepped_val = ((reference_val + int((self.end_val - self.start_val)/2)) % self.end_val) + self.start_val
        return stepped_val



class GradientAttribute:
    def __init__(self, labels, start_val, end_val, step_size):
        self.labels = labels
        self.start_val = start_val
        self.end_val = end_val
        self.step_size = step_size
        self.is_settable = True
        self.is_steppable = True

    def get_stepped_val(self, current_val, reference_val, direction):
        stepped_val = None
        if direction == "towards":
            if reference_val > current_val:
                stepped_val = current_val + self.step_size
                if reference_val < current_val:
                    stepped_val = reference_val
                if stepped_val > self.end_val:
                    stepped_val = self.end_val
            elif reference_val < current_val:
                stepped_val = current_val - self.step_size
                if reference_val > current_val:
                    stepped_val = reference_val
                if stepped_val < self.start_val:
                    stepped_val = self.start_val
            else:
                stepped_val = current_val
        elif direction == "away":
            if reference_val > current_val:
                stepped_val = current_val - self.step_size
                if stepped_val < self.start_val:
                    stepped_val = self.start_val
            elif reference_val < current_val:
                stepped_val = current_val + self.step_size
                if stepped_val > self.end_val:
                    stepped_val = self.end_val
            else:
                closer_to_start = ((current_val - self.start_val)/(self.end_val - self.start_val) < 0.5)
                if closer_to_start:
                    stepped_val = current_val + self.step_size
                    if stepped_val > self.end_val:
                        stepped_val = self.end_val
                else:
                    stepped_val = current_val - self.step_size
                    if stepped_val < self.start_val:
                        stepped_val = self.start_val
        return stepped_val


proper_names = ["Meghan", "Josh", "Neal", "Pat", "Branden", "Rohit", "Thomas", "Will", "Noah"]
api_key = "cf3fbbd5343f2b730227342211ed38dff571281357fa8df946ff5b4f2ccd8dc8"
pifx = PIFX(api_key=api_key)
light_data = pifx.list_lights()
lights = []
for light_datum in light_data:
    lights.append(LIFXCloudLight(light_datum['label'], api_key))
lights.append(LIFXCloudLight('the lights', api_key))

names = [l.name for l in lights]
settable_vals = lights[0].get_settable_val_labels()
steppable_vals = lights[0].get_steppable_val_labels()
dimmable_names = [l.name for l in lights if l.is_dimmable()]
unique_vals = list(set(settable_vals + steppable_vals))

print(names)
print(settable_vals)
print(steppable_vals)
print(dimmable_names)

name_rules = ""
counter = 0
for name in names:
    name = name.replace("'", "\\'")
    name = name.lower()
    for proper_name in proper_names:
        name = name.replace(proper_name.lower(), proper_name)
    name_rules += "N{}\n\t: '{}'\n\t;\n\n".format(counter, name)
    counter += 1
counter += 1
print(name_rules)

type_rules = ""
for val in unique_vals:
    type_rules += "{}\n\t: '{}'\n\t;\n\n".format(val.upper(), val.lower())
print(type_rules)




l = LIFXCloudLight("the lights", api_key)
#l = LIFXCloudLight("Neal's Desk Light", api_key)
#l = LIFXCloudLight("Branden's Light", api_key)
#l = LIFXCloudLight("Meghan's Desk Light", api_key)
#l.set_val("on")

#print(l.is_val("white"))
#print(l.step_val("warm", "towards"))
#print(l.step_val("vibrant", "towards"))
#print(l.step_val("green", "towards"))
#print(l.step_val("dim", "towards"))

#print(l.set_val("neutral"))
#print(l.step_val("cool", "towards"))

# print(l.get_val("temperature"))
# print(l.set_val("white"))
# print(l.get_val("saturation"))
l.strobe("orange", "vibrant")
#l.notify()
#l.set_LIFX_val(["hue"], 320)
#print(l.is_val("red"))
#print(l.set_val("pale"))
#print(l.set_val("red"))
#print(l.set_val("pale"))
#print(l.set_val("warm"))
