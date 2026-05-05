import { useState, useEffect } from 'react'

const API_KEY = '31fb838f301e17a32d2145fa8c032933'
const BASE_URL = 'https://gnews.io/api/v4/top-headlines'

export const getNews = async () => {
    try {
        const url = `${BASE_URL}?q=математика OR косинус OR синус OR тригонометрия OR геометрия OR алгебра OR стереометрия OR наука OR школа OR учеба OR обучение AND NOT война AND NOT украина AND NOT политика AND NOT путин&lang=ru&country=ru&max=10&apikey=${API_KEY}`;
        const response = await fetch(url)
        const data = await response.json()
        return data.articles
    } catch (error) {
        return []
    }
}