#include <bits/stdc++.h>

struct s_person
{
    std::string name;
    int age;
};

int main()
{
    std::cout << "hello" << std::endl;
    std::cout << 123 << std::endl;
    std::cout << true << std::endl;

    const std::string variable = "변수";
    const std::string easy = "쉽게";
    std::cout << "문장을 " << variable << "과 같이 " << easy << " 쓸 수 있어요" << std::endl;

    s_person person;
    person.name = "kmin";
    person.age = 27;
    std::cout << person.name << " " << person.age << std::endl;

    const int arr[4] = {1, 2, 3, 4};

    for (int i = 0; i < 4; i++)
    {
        std::cout << arr[i] << std::endl;
    }

    const std::string important_infomation = "very important infomation";
    std::clog << important_infomation << std::endl;

    const std::string serious_error = "very serious error";
    std::cerr << serious_error << std::endl;

    return (0);
}