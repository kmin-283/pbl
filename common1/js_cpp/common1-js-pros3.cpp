#include <bits/stdc++.h>

int calc_even_number_sum(int *lst, int size)
{
    int ret = 0;

    for (int i = 0; i < size; i++)
    {
        if (lst[i] % 2 == 0)
        {
            ret += lst[i];
        }
    }
    return ret;
}

int calc_odd_number_sum(int *lst, int size)
{
    int ret = 0;

    for (int i = 0; i < size; i++)
    {
        if (lst[i] % 2 != 0)
        {
            ret += lst[i];
        }
    }
    return ret;
}

int main()
{
    int lst[6] = {1, 2, 3, 4, 5, 6};
    // 짝수 값의 합
    int even_number_sum = calc_even_number_sum(lst, 6);
    std::cout << even_number_sum << std::endl;
    // 홀수 값의 합
    int odd_number_sum = calc_odd_number_sum(lst, 6);
    std::cout << odd_number_sum << std::endl;
    return (0);
}