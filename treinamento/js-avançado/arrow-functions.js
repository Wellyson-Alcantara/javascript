const obj = {
    thisLocal: function() {
        const thisLocal = (() => {
            console.log(this);
            return 'valor retornado';
        })();
        console.log(thisLocal);
    }
}

obj.thisLocal();