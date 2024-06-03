chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const audioExtensions = ['mp3', 'wav', 'flac', 'aac', 'ogg'];
    const videoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'wmv'];
    const docExtensions = ['pdf', 'docx', 'txt', 'pptx', 'xlsx'];
  
    const fileExtension = downloadItem.filename.split('.').pop().toLowerCase();
  
    let newPath = '';
  
    if (audioExtensions.includes(fileExtension)) {
      newPath = 'Audio/' + downloadItem.filename;
    } else if (videoExtensions.includes(fileExtension)) {
      newPath = 'Video/' + downloadItem.filename;
    } else if (docExtensions.includes(fileExtension)) {
      newPath = 'Documents/' + downloadItem.filename;
    }
  
    if (newPath) {
      suggest({ filename: newPath });
    } else {
      suggest();
    }
  });
  