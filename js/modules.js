/**
 * Foreslått endring
 *
 * return {
        modulnavn: {
            default: {
                title: "text",
                bilde: "text",
                content: "textarea"
            },
            variant: {
                title:
            }
        }
   };
 */
LugApp.factory('Modules', function () {
    return {
        jumbotron: {
            title: "text",
            bilde: "text",
            content: "textarea",
            btnText: "text",
            right: "checkbox",
            button: "checkbox"
        },
        navbar: {
            title: "text",
            linkOne: "text",
            linkTwo: "text",
            linkThree: "text"
        },
        breadcrumbs: {
            first: "text",
            second: "text",
            third: "text"
        },
        buttongroup: {
            left: "text",
            middle: "text",
            right: "text"
        },
        header: {
            title: "text"
        }
    };
});