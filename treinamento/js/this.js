const o = {
    prop: 100, f: function() {
        return this.prop
    }
}

console.log(o.f())