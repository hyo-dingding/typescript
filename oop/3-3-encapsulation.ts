{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public(default), private, protected 다양한 레벨에 정보를 은닉 할 수 있다.

    class CoffeeMaker {
        private static BEANS_GRAMM_SHOT = 2; // class level

        private coffeeBeans: number = 0; // instance(object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // constructor 호출하지 않고 새로운 커피기계를 만들경우
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 커피콩 추가
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("커피콩이 0보다 작으면 안돼!");
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    // const coffee1 = new CoffeeMaker(32);
    const coffee1 = CoffeeMaker.makeMachine(32); //  constructor를 private하게 만들고  static 메소드를 이용할 수 있도록 권장한다.
    console.log(coffee1);

    // coffee1.coffeeBeans = 3;
    // coffee1.coffeeBeans = -1; // invalid
    coffee1.fillCoffeeBeans(14);

    // 1
    // class User {
    //     private firstName: string;
    //     private lastName: string;
    //     // fullName: string;
    //     get fullName(): string {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    //     constructor(firstName: string, lastName: string) {
    //         // this.fullName = `${firstName} ${lastName}`;
    //     }
    // }

    // 2
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
            // get이라는 키워드를 쓰면 함수형태가 되지만 접근할때는 함수가 아니라 맵버 변수에 접근하는 것처럼 user.fullName 이렇게 작성해줘야한다.
        }
        private internalAge = 20;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error("정확한 나이를 입력해주세요");
            }
            this.internalAge = num;
        }
        constructor(
            private firstName: string, //
            private lastName: string
        ) {}
    }

    const user = new User("Hyojin", "Park");
    console.log(user.fullName);
    console.log(user.age);
    console.log(user.fullName);
}
