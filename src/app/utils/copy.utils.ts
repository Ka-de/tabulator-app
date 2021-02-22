export function copyElementText(element: HTMLInputElement) {
    element.focus();
    element.select();
    element.setSelectionRange(0, element.value.length);

    const successful = document.execCommand('copy');
    element.blur();
    return successful;
}