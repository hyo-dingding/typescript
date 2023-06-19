{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

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
}
