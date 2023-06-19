//커피기계 만들기
// 전역적으로 커피콩을 가지고 있는 변수를 만들기
// 커피 만드는 함수 만들기

// 커피를 만드는 메이크 커피에서는
// 1샷한번내리기 2샷 커피를 진하게 만들수 있음. 얼마나 많은 샷을 포함하는지 전달하는 인자가 있고 커피를 만들어서 리턴한다

// 내가 만든 코드

// type coffee_bean = "연하게" | "진하게";
// function make_Coffee(coffee_bean: string): string {
//     switch (coffee_bean) {
//         case "연하게":
//             return "one_shot 아메리카노";
//         case "진하게":
//             return "two_shot 아메리카노";
//         default:
//             throw new Error("다시 주문해주세요");
//     }
// }

// console.log(make_Coffee("진하게"));
// console.log(make_Coffee("연하게"));

// 절차지향적
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    const BEANS_GRAMM_SHOT = 2; // 필요한 커피 콩의 그람수
    let coffeeBeans: number = 3; // 얼마나 많은 콩이 있는지

    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_SHOT) {
            throw new Error("Not enough coffee beans!");
        }
        coffeeBeans -= shots * BEANS_GRAMM_SHOT;
        return {
            shots,
            hasMilk: false,
        };
    }
    coffeeBeans += 3 * BEANS_GRAMM_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}
