package com.timo.to_dolist2025;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;
import android.widget.Toast;
import androidx.fragment.app.Fragment;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class MonthFragment extends Fragment {
    private GridView calendarGrid;
    private TodoPreferences todoPrefs;
    private CalendarAdapter adapter;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_month, container, false);

        calendarGrid = view.findViewById(R.id.calendarGrid);
        todoPrefs = new TodoPreferences(getContext());

        refreshData(); // Load data initially

        return view;
    }

    public void refreshData() {
        // Get the current month and year
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);

        // Get the number of days in the month
        int daysInMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

        // Create a list of days
        List<String> days = new ArrayList<>();
        for (int i = 1; i <= daysInMonth; i++) {
            days.add(String.valueOf(i));
        }

        // Set up the adapter
        adapter = new CalendarAdapter(getContext(), days);
        calendarGrid.setAdapter(adapter);

        // Handle date selection
        calendarGrid.setOnItemClickListener((parent, view, position, id) -> {
            int selectedDay = Integer.parseInt(days.get(position));
            Calendar selectedDate = Calendar.getInstance();
            selectedDate.set(year, month, selectedDay);

            // Check events for the selected date
            List<Todo> todos = todoPrefs.getTodos();
            List<Todo> events = new ArrayList<>();
            for (Todo todo : todos) {
                Calendar todoDate = Calendar.getInstance();
                todoDate.setTime(todo.getDatetime());
                if (todoDate.get(Calendar.YEAR) == year &&
                        todoDate.get(Calendar.MONTH) == month &&
                        todoDate.get(Calendar.DAY_OF_MONTH) == selectedDay) {
                    events.add(todo);
                }
            }

            // Display the events
            if (!events.isEmpty()) {
                StringBuilder eventList = new StringBuilder();
                for (Todo event : events) {
                    eventList.append(event.getTitle()).append("\n");
                }
                new android.app.AlertDialog.Builder(getContext())
                        .setTitle("Events on " + selectedDay)
                        .setMessage(eventList.toString())
                        .setPositiveButton("OK", null)
                        .show();
            } else {
                Toast.makeText(getContext(), "No events on this day", Toast.LENGTH_SHORT).show();
            }
        });
    }
}