#include <iostream>

using namespace std;

class Animal
{
public:
    virtual ~Animal() {}; // 추상 클래스는 반드시 destructor?
    virtual void Cry() = 0;
};

class Dog : public Animal
{
public:
    virtual void Cry()
    {
        cout << "Bow Wow" << endl;
    }
};

class Cat :public Animal
{
public:
    virtual void Cry()
    {
        cout << "Miyao Miyao" << endl;
    }
};
int main()
{
    Animal* animal;
    Dog myDog;
    myDog.Cry();
    Cat myCat;
    myCat.Cry();

    animal = &myDog;
    animal->Cry();
    animal = &myCat;
    animal->Cry();

    return 0;
}
