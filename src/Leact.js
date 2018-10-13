class Leact {
    static createElement(type, props = {}, ...children) {
        return {type, props: props || {}, children: [].concat.apply([], children)};
    }
}

export default Leact