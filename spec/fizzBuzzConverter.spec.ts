import fizzBuzzConverter, {FizzBuzzType} from '../src/fizzBuzzConverter'


describe('should convert to fizz when 3 multiple', () => {
    let result: FizzBuzzType = 0;

    beforeEach(() => {
        result = 0;
    });

    test('number is 3', () => {
        result = fizzBuzzConverter(3)
    });

    test('number is 6', () => {
        result = fizzBuzzConverter(6)
    });

    test('number is 12', () => {
        result = fizzBuzzConverter(12)
    });

    test('number is 18', () => {
        result = fizzBuzzConverter(18)
    });

    test('number is 21', () => {
        result = fizzBuzzConverter(21)
    });

    test('number is 99', () => {
        result = fizzBuzzConverter(99)
    });

    afterEach(() => {
        expect(result).toBe("Fizz");
    });
});

describe('should convert to buzz when 5 multiple', () => {
    let result: FizzBuzzType = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("Buzz");
    });

    test('number is 5', () => {
        result = fizzBuzzConverter(5)
    });

    test('number is 10', () => {
        result = fizzBuzzConverter(10)
    });

    test('number is 20', () => {
        result = fizzBuzzConverter(20)
    });

    test('number is 85', () => {
        result = fizzBuzzConverter(85)
    });

    test('number is 95', () => {
        result = fizzBuzzConverter(95)
    });

    test('number is 100', () => {
        result = fizzBuzzConverter(100)
    });
});

describe('should convert to FizzBuzz when 15 multiple', () => {
    let result: FizzBuzzType = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("FizzBuzz");
    });

    test('number is 15', () => {
        result = fizzBuzzConverter(15)
    });

    test('number is 30', () => {
        result = fizzBuzzConverter(30)
    });

    test('number is 45', () => {
        result = fizzBuzzConverter(45)
    });

    test('number is 60', () => {
        result = fizzBuzzConverter(60)
    });

    test('number is 75', () => {
        result = fizzBuzzConverter(75)
    });

    test('number is 90', () => {
        result = fizzBuzzConverter(90)
    });
});

describe('should convert to self string when common number', () => {
    let result: FizzBuzzType = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe(result.toString());
    });

    test('number is 1', () => {
        result = fizzBuzzConverter(1)
    });

    test('number is 2', () => {
        result = fizzBuzzConverter(2)
    });

    test('number is 4', () => {
        result = fizzBuzzConverter(4)
    });

    test('number is 94', () => {
        result = fizzBuzzConverter(94)
    });

    test('number is 97', () => {
        result = fizzBuzzConverter(97)
    });

    test('number is 98', () => {
        result = fizzBuzzConverter(98)
    });
});

describe('should throw exception when out of range', () => {
    test('number is 0', () => {
        expect(() => fizzBuzzConverter(0)).toThrow(RangeError);
    });

    test('number is 101', () => {
        expect(() => fizzBuzzConverter(101)).toThrow(RangeError);
    });
});