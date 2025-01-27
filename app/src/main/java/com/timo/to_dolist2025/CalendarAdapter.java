package com.timo.to_dolist2025;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;
import java.util.List;

public class CalendarAdapter extends BaseAdapter {
    private Context context;
    private List<String> days;
    private LayoutInflater inflater;

    public CalendarAdapter(Context context, List<String> days) {
        this.context = context;
        this.days = days;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return days.size();
    }

    @Override
    public Object getItem(int position) {
        return days.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = inflater.inflate(android.R.layout.simple_list_item_1, parent, false);
        }

        TextView dayTextView = convertView.findViewById(android.R.id.text1);
        dayTextView.setText(days.get(position));
        dayTextView.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);

        return convertView;
    }
}
