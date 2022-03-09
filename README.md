# TDD @FizzBuzz

## 开发环境
 - node v14
 - TypeScript
 - Jest
 
## 业务目标

### FizzBuzz
设计一个程序，该程序能打印1到100之间的数字，包含1，100。

1. 打印字符串`"Fizz"`
	- Given 一个数字
	- When 该数字为3的倍数
	- then 打印 `"Fizz"`
2. 打印字符串`"Buzz"`
	- Given 一个数字
	- When 该数字为5的倍数
	- then 打印 `"Buzz"`
3. 打印字符串`"FizzBuzz"`
	- Given 一个数字
	- When 该数字为15的倍数
	- then 打印 `"FizzBuzz"`
4. 打印数字字符串
	- Given 一个数字
	- When 该数字不是3、5、15的倍数
	- then 打印数字本身
5. 异常处理
	- Given 一个数字
	- When 不在1~100之间
	- then 抛出异常

## Tasking

| Task | Input | Output |
|:---|:---|:---|
| 1 | 15, 30, 45, 60, 75, 90 |  `"FizzBuzz"` |
| 2 | 3, 6, 12, 18, 21, 99 |  `"Fizz"` |
| 3 | 5, 10, 20, 85, 95, 100 |  `"Buzz"` |
| 4 | 1, 2, 4, 94, 97, 98 |  `"1"`, `"2"`, `"4"`, `"94"`, `"97"`, `"98"` |
| 5 | 0, 101 |  `RangeError` |

## 编码路线

## 参考资料
- [Jest 用户指南](https://jestjs.io/zh-Hans/docs/getting-started)