#include <future>
#include <iostream>
#include <string>
#include <thread>
#include <unistd.h>

void worker(std::promise<std::string> *p)
{
    std::cout << "worker 작업 시작!" << std::endl;
    // 1초간 대기 후 데이터 할당
    usleep(1000 * 1000);
    p->set_value("some_data");
}

int main()
{
    // p 라는 데이터를 약속
    std::promise<std::string> p;
    // 미래에 p라는 데이터를 돌려주겠다.
    std::future<std::string> data = p.get_future();

    std::thread t(worker, &p);

    std::cout << "먼저 작업을 수행합니다..." << std::endl;
    long long sum = 0;
    for (int i = 0; i < 100000000; i++)
    {
        sum += i;
    }
    std::cout << "값의 합: " << sum << std::endl;

    // 미래에 약속된 데이터를 받을 때 까지 대기;
    data.wait();
    std::cout << data.get() << std::endl;
    t.join();
    return (0);
}