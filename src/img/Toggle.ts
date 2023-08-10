// トグルボタンのクリックイベントのハンドラー
function handleToggleButtonClick(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    const heading = button.nextElementSibling as HTMLElement;
    heading.classList.toggle('collapsed');
}