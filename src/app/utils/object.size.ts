export function dataSize(data: any) {
    let size: number = 0;

    if (typeof data == 'string') {
        size = data.length * 2;
    }
    else if (typeof data == 'number') {
        size = 4;
    }
    else if (typeof data == 'boolean') {
        size = 1;
    }
    else if (typeof data == 'object') {
        for (let i in data) {
            size += dataSize(data[i]);
        }
    }
    
    return size;
}