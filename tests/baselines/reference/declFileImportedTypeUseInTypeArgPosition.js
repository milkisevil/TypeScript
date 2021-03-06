//// [declFileImportedTypeUseInTypeArgPosition.ts]
class List<T> { }
declare module 'mod1' {
    class Foo {
    }
}

declare module 'moo' {
    import x = require('mod1');
    export var p: List<x.Foo>;
}




//// [declFileImportedTypeUseInTypeArgPosition.js]
var List = (function () {
    function List() {
    }
    return List;
})();


//// [declFileImportedTypeUseInTypeArgPosition.d.ts]
declare class List<T> {
}
declare module 'mod1' {
}
declare module 'moo' {
    var p: List<x.Foo>;
}


//// [DtsFileErrors]


==== tests/cases/compiler/declFileImportedTypeUseInTypeArgPosition.d.ts (1 errors) ====
    declare class List<T> {
    }
    declare module 'mod1' {
    }
    declare module 'moo' {
        var p: List<x.Foo>;
                    ~~~~~
!!! Cannot find name 'x'.
    }
    