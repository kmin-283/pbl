#include <iostream>

struct s_person
{
    int age;
    std::string phone_number;
    std::string name;
};

void print_person(const s_person *person)
{
    std::cout << person->age << std::endl;
    std::cout << person->phone_number << std::endl;
    std::cout << person->name << std::endl;
}

int a = 10; // 변수 할당 방법

int sum(int a, int b) // 함수 선언 방법
{
    if (a < 0)
    { // 조건문 작성 방법
        a *= -1;
    }
    return (a + b);
}

int main()
{
    std::cout << sum(5, 5) << std::endl; // 출력 방법

    for (int i = 0; i < 10; i++)
    { // 반복문 작성 방법
        std::cout << i << std::endl;
    }

    s_person *person;
    if (!(person = (s_person *)malloc(sizeof(s_person))))
    {
        return (0);
    }
    person->age = 10;
    person->phone_number = "010-1234-5678";
    person->name = "kmin";
    print_person(person);
    free(person);

    return (0);
}
