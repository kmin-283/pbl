#include <future>
#include <iostream>
#include <string>
#include <thread>
#include <vector>
#include <unistd.h>
#include <time.h>

unsigned long long sum(const std::vector<int> &v, int start, int end)
{
    unsigned long long total = 0;
    for (unsigned long long i = start; i < end; ++i)
    {
        total += v[i];
    }
    return total;
}

unsigned long long parellel_sum(const std::vector<int> &v)
{
    std::future<unsigned long long> two_thrids =
        std::async(std::launch::async, sum, std::cref(v), v.size() / 3, v.size());

    unsigned long long one_thrid = sum(v, 0, v.size() / 3);
    std::cout << one_thrid << " one_thrid 가 끝났습니다" << std::endl;
    return two_thrids.get() + one_thrid;
}

int main()
{
    std::vector<int> v;
    v.reserve(100000000);

    for (int i = 0; i < 100000000; i++)
    {
        v.push_back(i + 1);
    }
    time_t start, end;
    start = clock();
    std::cout << parellel_sum(v) << std::endl;
    end = clock();
    std::cout << "async 수행시간: " << (double)(end - start) << std::endl;

    unsigned long long sum = 0;
    start = clock();
    for (int i = 0; i < 100000000; i++)
    {
        sum += v[i];
    }
    end = clock();
    std::cout << sum << std::endl;
    std::cout << "sync 수행시간: " << (double)(end - start) << std::endl;

    return (0);
}