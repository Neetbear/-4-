#include <iostream>

using namespace std;

class CEmployee
{
private:
    int m_salary;

public:
    CEmployee()
    {
        cout << "CEmployee Constructor\n";
        m_salary = 0;
    }

    ~CEmployee()
    {
        // do something
        cout << "CEmployee Destructor\n";
    }

    void SetSalary(int salary)
    {
        m_salary = salary;
    }

    int GetSalary()
    {
        return m_salary;
    }
};

int main()
{
    CEmployee* pEmployee = new CEmployee();

    pEmployee->SetSalary(60000);
    cout << "The employee's salary : " << pEmployee->GetSalary() << endl;

    if (pEmployee != NULL)
    {
        cout << "Pointer is null then will be deleted\n";
        delete pEmployee;
        pEmployee = NULL;
    }
    return 0;
}