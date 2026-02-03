package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // 1️⃣ GET ALL BOOKS
    public List<Book> getAllBooks() {
        return bookRepository.findAll();   // empty DB → []
    }

    // 2️⃣ GET BOOK BY ID (EXCEPTION)
    public Book getBookById(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Book not found with id: " + id)
                );
    }

    // 3️⃣ CREATE BOOK
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    // 4️⃣ UPDATE BOOK BY ID
    public Book updateBook(Long id, Book book) {
        return bookRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(book.getTitle());
                    existing.setDescription(book.getDescription());
                    existing.setPublishedYear(book.getPublishedYear());
                    return bookRepository.save(existing);
                })
                .orElseThrow(() ->
                        new ResourceNotFoundException("Cannot update. Book not found with id: " + id)
                );
    }

    // 5️⃣ DELETE BOOK BY ID (EXCEPTION)
    public void deleteBookById(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new ResourceNotFoundException("Cannot delete. Book not found with id: " + id);
        }
        bookRepository.deleteById(id);
    }

    // 6️⃣ DELETE ALL BOOKS
    public void deleteAllBooks() {
        bookRepository.deleteAll();
    }

    // 7️⃣ FIND BY PUBLISHED YEAR (EXCEPTION)
    public List<Book> findByPublishedYear(int year) {
        List<Book> books = bookRepository.findByPublishedYear(year);
        if (books.isEmpty()) {
            throw new ResourceNotFoundException("No books found for year: " + year);
        }
        return books;
    }
}
