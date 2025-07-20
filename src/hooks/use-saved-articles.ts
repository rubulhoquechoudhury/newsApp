"use client";

import { useState, useEffect, useCallback } from 'react';

const SAVED_ARTICLES_KEY = 'newswise-saved-articles';

export function useSavedArticles() {
  const [savedArticleIds, setSavedArticleIds] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(SAVED_ARTICLES_KEY);
      if (saved) {
        setSavedArticleIds(new Set(JSON.parse(saved)));
      }
    } catch (error) {
      console.error('Failed to load saved articles from localStorage', error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if(isLoaded) {
      try {
        window.localStorage.setItem(SAVED_ARTICLES_KEY, JSON.stringify(Array.from(savedArticleIds)));
      } catch (error) {
        console.error('Failed to save articles to localStorage', error);
      }
    }
  }, [savedArticleIds, isLoaded]);

  const addArticle = useCallback((id: string) => {
    setSavedArticleIds(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  }, []);

  const removeArticle = useCallback((id: string) => {
    setSavedArticleIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const isSaved = useCallback((id: string) => {
    return savedArticleIds.has(id);
  }, [savedArticleIds]);

  return { savedArticleIds: Array.from(savedArticleIds), addArticle, removeArticle, isSaved, isLoaded };
}
