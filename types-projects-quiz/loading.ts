{
    /**
     * Print Loading State
     */
    type LoadingState = {
        state: "loading";
    };

    type SuccessState = {
        state: "success";
        response: {
            body: string;
        };
    };

    type FailState = {
        state: "fail";
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printLoginState(resourceLoadState: ResourceLoadState) {
        // 방법1 if문
        // if (resourceLoadState.state === "loading") {
        //     console.log(`👀 loading...`);
        // }

        // if (resourceLoadState.state === "success") {
        //     console.log(`${resourceLoadState.response.body} 😀 loaded`);
        // }
        // if (resourceLoadState.state === "fail") {
        //     console.log(`${resourceLoadState.reason}😱 no network`);
        // }

        // 방법2 switch
        switch (resourceLoadState.state) {
            case "loading":
                console.log(`👀 loading...`);
                break;
            case "success":
                console.log(`😀 ${resourceLoadState.response.body}`);
                break;
            case "fail":
                console.log(`😱 ${resourceLoadState.reason}`);
                break;
            default:
                throw new Error(`unknown state: ${resourceLoadState}`);
        }
    }

    printLoginState({ state: "loading" }); // 👀 loading...
    printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
    printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
