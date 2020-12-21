function WordCloudData(data) {
    const topLanguageData = [];
    data.map((item) => {
        topLanguageData.push({
            text: item.name,
            value: item.count
        })
    })
    return topLanguageData;
}

export default WordCloudData;