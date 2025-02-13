Given two objects, obj1 and obj2, return a new object representing their differences. The output should include all keys that have different values in obj1 and obj2, along with nested structures when necessary.

Example1
obj1 = { "a": 1, "v": 3, "x": [], "z": { "a": null } };
obj2 = { "a": 1, "v": 4, "x": [], "z": { "a": 2 } };

Output:{ "v": [3, 4], "z": { "a": [null, 2] } }