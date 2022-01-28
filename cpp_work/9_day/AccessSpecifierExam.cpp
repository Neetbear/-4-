#include <iostream>

using namespace std;

class CBox
{
    protected:
        double m_width;
};

// 파생 클래스
class CSmallBox:public CBox
{
    public:
        void SetSmallWidth(double width);
        double GetSmallWidth();
};

void CSmallBox::SetSmallWidth(double width)
{
    m_width = width;
};

double CSmallBox::GetSmallWidth()
{
    return m_width;
}

int main()
{
    CSmallBox* smallBox = new CSmallBox();

    smallBox->SetSmallWidth(5.0);
    cout << "Width of small box : " << smallBox->GetSmallWidth() << endl;

    delete smallBox;
    return 0;
}