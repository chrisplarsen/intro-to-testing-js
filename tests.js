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

describe ("sayHello", function () {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Person1!" when executed', function() {
        expect(sayHello("Person1")).toBe("Hello Person1!");
    });
    it('should return the string "Hello Person2!" when executed', function() {
        expect(sayHello("Person2")).toBe("Hello Person2!");
    });
});
//copy line 9 I think