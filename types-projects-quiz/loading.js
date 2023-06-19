{
    function printLoginState(resourceLoadState) {
        if (resourceLoadState.state === "loading") {
            return "\uD83D\uDC40 loading...";
        }
        if (resourceLoadState.state === "success") {
            return "".concat(resourceLoadState.response.body, " \uD83D\uDE00 loaded");
        }
        if (resourceLoadState.state === "fail") {
            return "".concat(resourceLoadState.reason, "\uD83D\uDE31 no network");
        }
    }
    printLoginState({ state: "loading" }); // 👀 loading...
    printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
    printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
