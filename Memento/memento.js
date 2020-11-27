
/* The sample code creates two persons named Mike and John are created using the Person constructor function. 
Next, their mementos are created which are maintained by the CareTaker object.

We assign Mike and John bogus names before restoring them from their mementos. 
Following the restoration we confirm that the person objects are back to their original state with valid names.

The Memento pattern itself with CareTaker etc. is rarely used in JavaScript. 
However, JSON is a highly effective data format that is extremely useful in many different data exchange scenarios. */

var Person = function(name, street, city, state) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
}

Person.prototype = {

  hydrate: function() {
      var memento = JSON.stringify(this);
      return memento;
  },

  dehydrate: function(memento) {
      var m = JSON.parse(memento);
      this.name = m.name;
      this.street = m.street;
      this.city = m.city;
      this.state = m.state;
  }
}

var CareTaker = function() {
  this.mementos = {};

  this.add = function(key, memento) {
      this.mementos[key] = memento;
  },

  this.get = function(key) {
      return this.mementos[key];
  }
}

// log helper
var log = (function () {
  var log = "";

  return {
      add: function (msg) { log += msg + "\n"; },
      show: function () { alert(log); log = ""; }
  }
})();


function run() {
  var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
  var john = new Person("John Wang", "48th Street", "San Jose", "CA");
  var caretaker = new CareTaker();

  // save state

  caretaker.add(1, mike.hydrate());
  caretaker.add(2, john.hydrate());

  // mess up their names

  mike.name = "King Kong";
  john.name = "Superman";

  // restore original state

  mike.dehydrate(caretaker.get(1));
  john.dehydrate(caretaker.get(2));

  log.add(mike.name);
  log.add(john.name);

  log.show();
}