#include <iostream>
#include <memory>

using namespace std;

class CPerson {
 private:
    string strName;
    int nAge;
 public:
    CPerson(const string& name, int age);
    ~CPerson() { cout << "Object Destructor" << endl; }
    void ShowPersonInfo();
};

int main()
{
    // unique_ptr<CPerson> ptrPerson = make_unique<CPerson>("James Hetfiedl", 59);
    shared_ptr<CPerson> ptrPerson = make_shared<CPerson>("James Hetfiedl", 59);
    cout << "Currently Own count : " << ptrPerson.use_count() <<endl;
    auto james = ptrPerson;
    ptrPerson->ShowPersonInfo();
    cout << "Currently Own count : " << ptrPerson.use_count() <<endl;
    ptrPerson->ShowPersonInfo();
    james.reset();
    cout << "Currently Own count : " << ptrPerson.use_count() <<endl;

    return 0;
}

CPerson::CPerson(const string& name, int age)
{
    strName = name;
    nAge = age;
    cout << "Object constructor!!!" << endl;
}

void CPerson::ShowPersonInfo()
{
    cout << strName << "'s age : " << nAge << endl;
}