require.config({
    baseUrl: "js",
    paths: {
        "jquery": [
            //"http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min",
            "jquery-1.8.0.min"
        ]
    },
    shim: {
        "jquery-slider": ["jquery"],
        "jquery-util": { deps: ["jquery"], exports: "util" },
        "jquery-too.util": {
            deps: [],
            exports: "detials"
        },
        "jquery-win-util": {
            deps: [],
            exports: "detials"
        }
    }
});