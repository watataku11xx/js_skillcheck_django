function post() {
    const form = document.querySelector('form');
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        e.preventDefault();
        fetch('', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': csrfToken
            }
        })
        .then(response => {
            if (!response.ok) { // HTTPステータスが 200 から 299 の範囲外の場合
              alert(`Error ${response.status}: ${response.statusText}`);
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const contentsArea = document.getElementById('contents_area');
            const html = `
              <div class="article">
                ${data.text}
              </div>`;
            contentsArea.insertAdjacentHTML('afterbegin', html);
            form.reset();
            const charNum  = document.getElementById("char_num");
            charNum.innerHTML = "0文字";
        })
        .catch(error => {
            console.error('Error:', error);
            alert('AJAX request failed: ' + error);
        });
    })
}

window.addEventListener('DOMContentLoaded', post);