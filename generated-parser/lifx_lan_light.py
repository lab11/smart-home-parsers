from lifxlan import *

class LIFXLanLight:
    def __init__(self, name, mac_addr, ip_addr):
        self.name = name
        self.bulb = Light(mac_addr, ip_addr)

        self.power = BinaryAttribute(["power"], [True, False])
        self.hue = ToroidAttribute(["hue", "color"], 0, 65535, 2000)
        self.saturation = GradientAttribute(["saturation"], 0, 65535, 10000)
        self.brightness = GradientAttribute(["brightness"], 0, 65535, 10000)
        self.temperature = GradientAttribute([["temperature"], ["color temperature"]], 2500, 9000, 1000)
        self.attributes = [self.power, self.hue, self.saturation, self.brightness, self.temperature]

        self.values = {
            "on": {"attribute": self.power, "val": True},
            "off": {"attribute": self.power, "val": False},
            "red": {"attribute": self.hue, "val": RED[0]},
            "orange": {"attribute": self.hue, "val": ORANGE[0]},
            "yellow": {"attribute": self.hue, "val": YELLOW[0]},
            "green": {"attribute": self.hue, "val": GREEN[0]},
            "cyan": {"attribute": self.hue, "val": CYAN[0]},
            "blue": {"attribute": self.hue, "val": BLUE[0]},
            "purple": {"attribute": self.hue, "val": PURPLE[0]},
            "pink": {"attribute": self.hue, "val": PINK[0]},
            "vibrant": {"attribute": self.saturation, "val": 65535},
            "saturated": {"attribute": self.saturation, "val": 65535},
            "pastel": {"attribute": self.saturation, "val": 20000},
            "pale": {"attribute": self.saturation, "val": 5000},
            "white": {"attribute": self.saturation, "val": 0},
            "bright": {"attribute": self.brightness, "val": 65535},
            "dim": {"attribute": self.brightness, "val": 10000},
            "warm": {"attribute": self.saturation, "val": 2500},
            "cool": {"attribute": self.saturation, "val": 9000}
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

    def set_LIFX_val(self, attribute_labels, val):
        if attribute_labels != None and val != None:
            if "power" in attribute_labels:
                self.bulb.set_power(val)
            elif "hue" in attribute_labels:
                self.bulb.set_hue(val)
            elif "saturation" in attribute_labels:
                self.bulb.set_saturation(val)
            elif "brightness" in attribute_labels:
                self.bulb.set_brightness(val)
            elif "temperature" in attribute_labels:
                self.bulb.set_temperature(val)
            return True
        else:
            return False

    def get_LIFX_val(self, attribute_labels):
        retval = None
        if attribute_labels != None:
            if "power" in attribute_labels:
                retval = self.bulb.get_power()
            elif "hue" in attribute_labels:
                [retval, _, _, _] = self.bulb.get_color()
            elif "saturation" in attribute_labels:
                [_, retval, _, _] = self.bulb.get_color()
            elif "brightness" in attribute_labels:
                [_, _, retval, _] = self.bulb.get_color()
            elif "temperature" in attribute_labels:
                [_, _, _, retval] = self.bulb.get_color()
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



l = LIFXLanLight("Meghan's Desk Light", "d0:73:d5:24:72:5b", "192.168.105.218")
#print(l.step_val("green", "towards"))
print(l.set_val("cyan"))
#print(l.set_val("pastel"))
#print(l.set_val("orange"))
#print(l.set_val("pale"))
#print(l.set_val("warm"))
