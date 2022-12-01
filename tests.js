// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function (){
    it('should be defined function' , function() {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!"', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    })
    it('should return the string "Hello, Alex!"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!'", function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it("should return the string 'Hello World'", function () {
        expect(sayHello(false)).toBe("Hello, World!")
    })
});

    describe("isFive" , function () {
    it("should return function", function (){
        expect(typeof isFive).toBe("function")
    })
        it("should return bool when 5 is passed ", function () {
            expect(typeof isFive(2)).toBe("boolean")
        })
        it('should return true when passed "5"', function () {
            expect(isFive("5")).toBe(true)
        });
        it('should  return 5', function () {
            expect(isFive(5)).toBe(true)
        });

    })

    describe("isEven", function () {
        it('should return function', function () {
            expect(typeof isEven).toBe("function")
        })
        it('should return false', function () {
            expect(typeof isEven(4)).toBe("boolean")
        });
        it('should return true if 2 is even', function () {
            expect( isEven(2)).toBe(true)
        });
        it('should return true when execute -4', function () {
            expect(isEven(-4)).toBe(true)
        });
        it('should return false when execute 3', function () {
            expect(isEven(3)).toBe(false)
        });
        it('should return false when called banana', function () {
            expect(isEven("banana")).toBe(false)
        });
        it('should return true when called "8"', function () {
            expect(isEven("8")).toBe(true)
        })
        it('should return false when called Infinity', function () {
            expect(isEven(Infinity)).toBe(false)
        });
        it('should return false when called true or false', function () {
            expect(isEven(true)).toBe(false)
        });
        it('should  return false when empty', function () {
            expect( isEven()).toBe(false)
        });
    })
