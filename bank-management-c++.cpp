#include<iostream>
#include<conio.h>
#include<windows.h>

using namespace std;

class Bank{
    private:
	    int total;

    struct person{
	    	string name;
	    	int date;
		}person[100];

        public:
		Bank(){
			total=0;
		}

    void choice();
    void about();
    void perData();
};

int main()
{
    Bank b;
    b.choice();
    return 0;
}

void Bank::choice(){
	char ch;

	while(1){
	cout<<"\n\nWelcome to 'First Guarantee Bank' Limited."<<endl;
	cout<<"\n"<<endl;
	cout<<"1. About us"<<endl;
	cout<<"2. Create account"<<endl;
	cout<<"3. Exit"<<endl;
	ch=getch();
	system("CLS");

	switch(ch){
        case '1':
			Bank::about();
			break;
        case '2':
			if(total==0){
                Bank::perData();
			}else{
			cout<<"No data is entered"<<endl;
		   }
           break;
        case '3':
               exit(0);
            break;
		default:
			cout<<"Invalid input"<<endl;
			break;
	}
    }
}

void Bank::perData(){
     cout<<"\n\nWelcome to 'First Guarantee Bank' Limited."<<endl;
    cout<<"\nEnter your data: "<<endl;
	cout<<"\nEnter name: ";
	cin>>person[total].name;
	cout<<"\nAccount creation date: ";
	cin>>person[total].date;

    cout<<"\n\nWelcome to 'First Guarantee Bank' Limited."<<endl;
	cout<<"\n"<<endl;
	cout<<"\nHi, Mr. "<<person->name<<endl;
    cout<<"\nYour account has been successfully created!!"<<endl;
    cout<<"\n\nPlease select your menu:"<<endl;
    cout<<"\n1. Deposit";
    cout<<"\n2. Withdraw";
    cout<<"\n3. Check Balance";
    cout<<"\n4. Fund Transfer";
    cout<<"\n5. Home";
}

void Bank::about(){
    char chh;
    cout<<"\n\nWelcome to 'First Guarantee Bank' Limited."<<endl;
    cout<<"\n\nWe are First Guarantee Bank Limited. Our interest rete is 5%";    
    cout<<"\n\nTo go home press 1";
    chh=getch();
    switch (chh)
    {
    case '1':
        Bank::choice();
        break;
    default:
        cout<<"Wrong Input!";
        break;
    }
}