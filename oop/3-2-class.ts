{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        // 두가지 속성
        static BEANS_GRAMM_SHOT = 2; // class level

        coffeeBeans: number = 0; // instance(object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // constructor 호출하지 않고 새로운 커피기계를 만들경우
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 컨스트럭터
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

    const coffee1 = new CoffeeMaker(32);
    console.log(coffee1);

    const coffee2 = new CoffeeMaker(14);
    console.log(coffee2);

    const coffee3 = CoffeeMaker.makeMachine(2);
    console.log(coffee3);
}
