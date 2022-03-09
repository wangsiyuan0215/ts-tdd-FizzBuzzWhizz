# 题目要求：

1. 写代码之前做 Tasking，并产出 Tasking 结果，记录下来；
2. 小步提交，每通过一个测试，做一次 Commit，Commit 信息要表意；
3. 每一个练习你的 GitHub 账号下创建一个代码库，完成练习后，将你的代码库作为答案提交。

# 作业背景：

你是一名体育老师，在某次课距离下课还有五分钟时，你决定搞一个游戏。此时有 N 名学 生在上 课。游戏的规则是:

1. 让所有学生排成一队，然后按顺序报数；
2. 学生报数时，如果所报数字是 3 的倍数，那么不能说该数字，而要说 Fizz;如果所
   报数字是 5 的倍数，那么要说 Buzz;如果所报数字是第 7 的倍数，那么要说
   Whizz；
3. 学生报数时，如果所报数字同时是两个特殊数的倍数情况下，也要特殊处理，比如
   3 和 5 的 倍数，那么不能说该数字，而是要说 FizzBuzz, 以此类推。如果同时是
   三个特殊数的倍数， 那么要说 FizzBuzzWhizz；
4. 学生报数时，如果所报数字包含了 3，那么也不能说该数字，而是要说相应的单
   词，比如要 报 13 的同学应该说 Fizz；
5. 如果数字中包含了 3，那么忽略规则 2 和规则 3，比如要报 30 的同学只报 Fizz，
   不报 FizzBuzz；
6. 如果数字中包含了 5，那么忽略规则 4 和规则 5，并且忽略被 3 整除的判定，比如
   要报 35 的同 学不报 Fizz，报 BuzzWhizz，其他 case 自己补齐；
7. 如果数字中包含了 7，则忽略被 5 整除的判定，若同时还包含 5，就忽略规则 6 中
   忽略被 3 整 除的判定，比如要报 75 的同学只报 Fizz，其他 case 自己补齐。

# Tasking 说明：

> Given... When... then...

题目中所得结果除了正常数字以外，还会产出如下字符串：

- Fizz;
- Buzz;
- Whizz;
- FizzBuzz;
- BuzzWhizz;
- FizzWhizz;
- FizzBuzzWhizz;

**若数字包含数字 5，那么该数字包含数字 3 的规则作废。**

**Tasking:**

- Given 不包含数字 3、5、7 的 0 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 0；

- Given 不包含数字 3、5、7 的 4 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 4；
- Given 只包含数字 3 的 31 When 所报数字非 3、5、7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 352 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 352；
- Given 包含数字 3、7 的 37 When 所报数字非 3、5、7 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 52 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 52；
- Given 只包含数字 7 的 71 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 71；
- Given 包含数字 7、5 的 157 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 157；
- Given 包含数字 3、5、7 的 1573 When 所报数字非 3、5、7 的倍数 Then 返回当前数字 1537；

- Given 不包含 3、5、7 的 6 数字 When 所报数字只是 3 的倍数 Then 返回 Fizz；
- Given 只包含数字 3 的 33 When 所报数字只是 3 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 351 When 所报数字只是 3 的倍数 Then 返回当前数字 351；
- Given 包含数字 3、7 的 372 When 所报数字只是 3 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 51 When 所报数字只是 3 的倍数 Then 返回当前数字 51；
- Given 只包含数字 7 的 72 When 所报数字只是 3 的倍数 Then 返回当前数字 Fizz；
- Given 包含数字 7、5 的 57 When 所报数字只是 3 的倍数 Then 返回当前数字 Fizz；
- Given 包含数字 3、5、7 的 573 When 所报数字只是 3 的倍数 Then 返回当前数字 Fizz；

- Given 不包含 3、5、7 的 10 数字 When 所报数字只是 5 的倍数 Then 返回 Buzz；
- Given 只包含数字 3 的 30 When 所报数字只是 5 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 315 When 所报数字只是 5 的倍数 Then 返回 Buzz；
- Given 包含数字 3、7 的 370 When 所报数字只是 5 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 50 When 所报数字只是 5 的倍数 Then 返回 Buzz；
- Given 只包含数字 7 的 70 When 所报数字只是 5 的倍数 Then 返回当前数字 70；
- Given 包含数字 7、5 的 75 When 所报数字只是 5 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5、7 的 3755 When 所报数字只是 5 的倍数 Then 返回当前数字 3755；

- Given 不包含 3、5、7 的 14 数字 When 所报数字只是 7 的倍数 Then 返回 Whizz；
- Given 只包含数字 3 的 63 When 所报数字只是 7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 315 When 所报数字只是 7 的倍数 Then 返回 Buzz；
- Given 包含数字 3、7 的 370 When 所报数字只是 7 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 50 When 所报数字只是 7 的倍数 Then 返回 Buzz；
- Given 只包含数字 7 的 70 When 所报数字只是 7 的倍数 Then 返回当前数字 70；
- Given 包含数字 7、5 的 75 When 所报数字只是 7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5、7 的 3157 When 所报数字只是 7 的倍数 Then 返回当前数字 Whizz；

- Given 不包含 3、5、7 的 60 数字 When 所报数字是 3 和 5 的倍数 Then 返回 FizzBuzz；
- Given 只包含数字 3 的 30 When 所报数字是 3 和 5 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 345 When 所报数字是 3 和 5 的倍数 Then 返回当前数字 Buzz；
- Given 包含数字 3、7 的 7320 When 所报数字是 3 和 5 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 15 When 所报数字是 3 和 5 的倍数 Then 返回当前数字 Buzz；
- Given 只包含数字 7 的 270 When 所报数字是 3 和 5 的倍数 Then 返回当前数字 Fizz；
- Given 包含数字 7、5 的 570 When 所报数字是 3 和 5 的倍数 Then 返回当前数字 Fizz；
- Given 包含数字 3、5、7 的 375 When 所报数字是 3 和 5 的倍数 Then 返回当前数字 Fizz；

- Given 不包含 3、5、7 的 21 数字 When 所报数字是 3 和 7 的倍数 Then 返回 FizzWhizz；
- Given 只包含数字 3 的 63 When 所报数字是 3 和 7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 1533 When 所报数字是 3 和 7 的倍数 Then 返回当前数字 Whizz；
- Given 包含数字 3、7 的 273 When 所报数字是 3 和 7 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 252 When 所报数字是 3 和 7 的倍数 Then 返回当前数字 Whizz；
- Given 只包含数字 7 的 147 When 所报数字是 3 和 7 的倍数 Then 返回当前数字 FizzWhizz；
- Given 包含数字 7、5 的 567 When 所报数字是 3 和 7 的倍数 Then 返回当前数字 FizzWhizz；
- Given 包含数字 3、5、7 的 357 When 所报数字是 3 和 7 的倍数 Then 返回当前数字 FizzWhizz；

- Given 不包含 3、5、7 的 140 数字 When 所报数字是 5 和 7 的倍数 Then 返回 BuzzWhizz；
- Given 只包含数字 3 的 1330 When 所报数字是 5 和 7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 350 When 所报数字是 5 和 7 的倍数 Then 返回 BuzzWhizz；
- Given 包含数字 3、7 的 3710 When 所报数字是 5 和 7 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 245 When 所报数字是 5 和 7 的倍数 Then 返回 BuzzWhizz；
- Given 只包含数字 7 的 700 When 所报数字是 5 和 7 的倍数 Then 返回 Whizz；
- Given 包含数字 7、5 的 175 When 所报数字是 5 和 7 的倍数 Then 返回 Whizz；
- Given 包含数字 3、5、7 的 3745 When 所报数字是 5 和 7 的倍数 Then 返回 Whizz；

- Given 不包含 3、5、7 的 210 数字 When 所报数字是 3、 5 和 7 的倍数 Then 返回 FizzBuzzWhizz；
- Given 只包含数字 3 的 3360 When 所报数字是 3、 5 和 7 的倍数 Then 返回 Fizz；
- Given 包含数字 3、5 的 315 When 所报数字是 3、 5 和 7 的倍数 Then 返回 BuzzWhizz；
- Given 包含数字 3、7 的 2730 When 所报数字是 3、 5 和 7 的倍数 Then 返回 Fizz；
- Given 只包含数字 5 的 105 When 所报数字是 3、 5 和 7 的倍数 Then 返回 BuzzWhizz；
- Given 只包含数字 7 的 1470 When 所报数字是 3、 5 和 7 的倍数 Then 返回 FizzWhizz；
- Given 包含数字 7、5 的 1575 When 所报数字是 3、 5 和 7 的倍数 Then 返回 FizzWhizz；
- Given 包含数字 3、5、7 的 735 When 所报数字是 3、 5 和 7 的倍数 Then 返回 FizzWhizz；
