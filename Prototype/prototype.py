"""
Specify the kinds of objects to create using a prototypical instance,
and create new objects by copying this prototype.

*if we have an object and we want to have a new object but with the same values.

type: creational
"""

import copy


class Prototype:
    """
    Example class to be copied.
    """

    pass


def main():
    prototype = Prototype()
    prototype_copy = copy.deepcopy(prototype)


if __name__ == "__main__":
    main()