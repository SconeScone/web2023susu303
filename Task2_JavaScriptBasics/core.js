//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) 
{
    return ~~n === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
    let arr = [];
    for (let i = 2; i<=20;i+=2)
        arr.push(i);
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) 
{
    let sum = 0;
    for (let i = 1; i<=n;i++)
        sum += i;
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) 
{
    if(n == 0)
        return 0;
    return sum = n + recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n)
 {
    let fact = 1;
    for (let i = 1; i <= n; i++)
        fact *= i;
    return fact;
 }

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) 
{
    if(n == 0)
        return false;
    let tmpN = n;
    let pow = 0;
    while(tmpN > 1)
    {
        pow +=1;
        tmpN >>= 1;
    }
    if(tmpN << pow == n)
        return true;
    else return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n)
 {
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
 }

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) 
{
    if(operatorFn === undefined)
        return (value)=>
    {
        let newValue = initialValue;
        return newValue;
    };
    return (newValue)=>
    {
        let storedValue = initialValue;
        initialValue = operatorFn(storedValue, newValue);
        return initialValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) 
{
    let newStart;
    if (start === undefined)
        newStart = 0;
    else newStart = start;
    let newStep;
    if (step === undefined)
        newStep = 1;
    else newStep = step;
    let genFunc = function generatorFunc()
    {
        let newStart1 = newStart;
        let newStep1 = newStep;
        newStart += newStep1;
        return newStart1;
    }
    return genFunc;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) 
{
    if ((typeof firstObject !== 'object')&&(typeof secondObject !== 'object'))
    {
        if(firstObject == secondObject)
            return true;
        if(firstObject !== firstObject && secondObject !== secondObject)
            return true;
        else return false;
    }
    else
    {
        res = false;
        for (let key in firstObject)
        {
            if((firstObject[key]===null) && (secondObject[key]===null))
                return true;
            if(((firstObject[key]===null) && (secondObject[key]!==null))||((firstObject[key]!==null) && (secondObject[key]===null)))
                return false;
            if((firstObject[key]===undefined) && (secondObject[key]===undefined))
                return true;
            if(Object.keys(firstObject[key]).length != Object.keys(secondObject[key]).length)
                return false;
            res = deepEqual(firstObject[key], secondObject[key]);
            if(res == false)
                return false;
        }
        return res;
    }
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
