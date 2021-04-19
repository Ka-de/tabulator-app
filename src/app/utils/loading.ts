export function loading() {    
    let loader = <HTMLSpanElement>document.body.querySelector('#loader');
    loader = loader
        ? loader
        : document.createElement('span');

    loader.id = "loader";
    loader.classList.add('loading');

    document.body.append(loader);    
}

export function loaded() {
    const loader = <HTMLSpanElement>document.body.querySelector('#loader');
    loader.classList.add('loaded');
}