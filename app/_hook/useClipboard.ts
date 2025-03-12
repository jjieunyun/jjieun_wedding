const useClipboard = () => {
    const copyToClipboard = async (text: string) => {

        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            await navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();

            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('클립보드에 복사되었습니다. (구형 브라우저)');
        }

    };

    return {copyToClipboard};
};

export default useClipboard;