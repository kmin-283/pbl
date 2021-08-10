#include <iostream>
#include <string>
#include <stdlib.h>

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

int main(void)
{
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