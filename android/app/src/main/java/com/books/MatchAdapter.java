package com.books;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by flowing on 2/8/18.
 */

public class MatchAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {


    Context context;
    List<String> cola;
    List<String> colb;
    Map<String,String> answer;
    LayoutInflater inflater;
    Object currentA;
    Object currentB;
    List<View> views;


    public MatchAdapter(Context context, List<String> cola, List<String> colb, Map<String, String> answer) {
        this.context = context;
        this.cola = cola;
        this.colb = colb;
        this.answer = answer;
        inflater = LayoutInflater.from(context);
        views = new ArrayList<>();
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = inflater.inflate(R.layout.match_recycler,parent,false);
        views.add(view);
        return new MatchViewHolder(view);
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        final int pos = position;
        ((MatchViewHolder)holder).setColA(cola.get(position));
        ((MatchViewHolder)holder).setColB(colb.get(position));
        ((MatchViewHolder)holder).colA.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                currentA = cola.get(pos);
                view.setBackgroundColor(context.getResources().getColor(R.color.green));
                if(currentB!=null)
                {
                  if(answer.get(currentA).equals(currentB))
                  {
                      for(View v:views)
                      {
                          if(((Button)v).getText().toString().equals(currentB))
                          {
                              v.setBackgroundColor(context.getResources().getColor(R.color.green));
                              view.setActivated(false);
                              v.setActivated(false);
                              break;
                          }
                      }
                  }
                }
            }
        });

        ((MatchViewHolder)holder).colB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                currentB = colb.get(pos);
                view.setBackgroundColor(context.getResources().getColor(R.color.green));
                if(currentB!=null)
                {
                    if(answer.get(currentB).equals(currentA))
                    {
                        for(View v:views)
                        {
                            if(((Button)v).getText().toString().equals(currentB))
                            {
                                v.setBackgroundColor(context.getResources().getColor(R.color.green));
                                view.setActivated(false);
                                v.setActivated(false);
                                break;
                            }
                        }
                    }
                    else{
                        for(View v:views)
                        {
                            v.setBackgroundColor(context.getResources().getColor(R.color.blue));
                        }
                    }
                }
            }
        });


    }

    @Override
    public int getItemCount() {
        return this.cola.size();
    }

    public class MatchViewHolder extends RecyclerView.ViewHolder{

        Button colA;
        Button colB;
        public MatchViewHolder(View itemView) {
            super(itemView);
            colA = (Button) itemView.findViewById(R.id.cola);
            colB = (Button) itemView.findViewById(R.id.colb);
        }
        public void setColA(String a)
        {
            this.colA.setText(a);
        }
        public void setColB(String a)
        {
            this.colB.setText(a);
        }

    }


}
