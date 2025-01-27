package com.timo.to_dolist2025;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import androidx.fragment.app.Fragment;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

public class TodayFragment extends Fragment {
    private TodoPreferences todoPrefs;
    private TodoAdapter adapter;
    private ListView listView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_today, container, false);

        todoPrefs = new TodoPreferences(getContext());
        listView = view.findViewById(R.id.today_list);

        // Set up the FAB
        FloatingActionButton fabAdd = view.findViewById(R.id.fab_add);
        fabAdd.setOnClickListener(v -> showAddTodoDialog());

        refreshData(); // Load data initially

        return view;
    }

    private void showAddTodoDialog() {
        // Open the AddTodoDialog
        AddTodoDialog addTodoDialog = new AddTodoDialog();
        addTodoDialog.show(getParentFragmentManager(), "AddTodoDialog");
    }

    public void refreshData() {
        // Get all todos
        List<Todo> allTodos = todoPrefs.getTodos();

        // Filter for today's todos
        Calendar today = Calendar.getInstance();
        List<Todo> todayTodos = allTodos.stream()
                .filter(todo -> {
                    Calendar todoDate = Calendar.getInstance();
                    todoDate.setTime(todo.getDatetime());
                    return today.get(Calendar.YEAR) == todoDate.get(Calendar.YEAR) &&
                            today.get(Calendar.DAY_OF_YEAR) == todoDate.get(Calendar.DAY_OF_YEAR);
                })
                .collect(Collectors.toList());

        // Update the adapter
        adapter = new TodoAdapter(getContext(), todayTodos);
        listView.setAdapter(adapter);
    }
}