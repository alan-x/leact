class Leact {
    static createElement(type, props = {}, ...children) {
        return {type, props:props||{}, children};
    }
}

export default Leact