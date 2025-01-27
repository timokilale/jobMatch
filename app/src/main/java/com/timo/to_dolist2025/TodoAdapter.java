package com.timo.to_dolist2025;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.TextView;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

public class TodoAdapter extends ArrayAdapter<Todo> {
    private Context context;
    private List<Todo> todos;
    private TodoPreferences todoPrefs;

    public TodoAdapter(Context context, List<Todo> todos) {
        super(context, 0, todos);
        this.context = context;
        this.todos = todos;
        this.todoPrefs = new TodoPreferences(context);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = LayoutInflater.from(context).inflate(R.layout.todo_item, parent, false);
        }

        Todo todo = getItem(position);
        CheckBox checkBox = convertView.findViewById(R.id.checkbox_todo);
        TextView titleText = convertView.findViewById(R.id.text_title);
        TextView timeText = convertView.findViewById(R.id.text_time);

        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm", Locale.getDefault());

        titleText.setText(todo.getTitle());
        timeText.setText(sdf.format(todo.getDatetime()));
        checkBox.setChecked(todo.isCompleted());

        checkBox.setOnCheckedChangeListener((buttonView, isChecked) -> {
            todo.setCompleted(isChecked);
            todoPrefs.saveTodos(todos);
        });

        return convertView;
    }
}
