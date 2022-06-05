package de.telran;

import java.util.*;
import java.util.Iterator;

public class Main {

    public static void main(String[] args) {
        Integer n = null;
        Integer n2 = 100;
       Integer n3=Integer.valueOf("14");

      //


        System.out.println(n==n2);
        Integer n1 = new Integer(10);

        Boolean bool = true;
        Character ch = 'c';

        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(18);
        list.add(18);
        list.add(8);


        Iterator<Integer> iterator = list.iterator();
        ListIterator<Integer> listIterator = list.listIterator();
//        while (iterator.hasNext()){
//            System.out.println(iterator.next());
//        }
        System.out.println("-----");
        for (Integer i : list) {

            if (Collections.frequency(list, i) <= 1){
                System.out.println(i + " doesn't have a pair");
            }
        }
        System.out.println("-----");
       for (ListIterator iterator1 = list.listIterator(list.size()); iterator1.hasPrevious();){
           final Object listElement = iterator1.previous();
           System.out.println(listElement);
       }


    }

    public static void m(int i){
        System.out.println(i);
    }


}
