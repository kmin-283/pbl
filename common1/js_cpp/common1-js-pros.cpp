#include <iostream>

int a = 10; // 변수 할당 방법

int sum(int a, int b) // 함수 선언 방법
{
    if (a < 0)
    { // 조건문 작성 방법
        a *= -1;
    }
    return (a + b);
}

std::cout << sum(5, 5) << std::endl; // 출력 방법

for (int i = 0; i < 10; i++)
{ // 반복문 작성 방법
    std::cout << i << std::endl;
}